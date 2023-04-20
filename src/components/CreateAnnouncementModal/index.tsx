import { Modal, Flex, FormControl, Text, Button, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalFooter, FormErrorMessage, Select, FormLabel, Stack, Input } from '@chakra-ui/react'
import { IModal, ICreateAnnouncementModal, IAnnouncement } from '../../interface'
import Inputs from '../Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateAnnouncementModalSchema } from '../../schemas/CreateAnnouncementModal/CreateAnnouncementModalSchema'

import { dataBase } from '../../dataBase.mock.json'
import { useContext, useEffect, useState } from 'react'
import { AnnouncementContext } from '../../contexts/Announcement/AnnouncementContexts'
import Textareas from '../Textarea'
import { kenzieKars } from '../../services/axios'
import { Await } from 'react-router-dom'
import { types } from 'util'

interface ICar {
  id: string
  year: number
  name: string
  fuel: number
  value: number
  brand: string
}

const CreateAnnouncementModal = ({ isOpen, onOpen, onClose }: IModal) => {
  const { createAnnouncement } = useContext(AnnouncementContext)

  const [inputModal, setInputModal] = useState([
    {
      label: 'Imagem da capa',
      type: 'text',
      placeholder: 'https://image.com'
    }
  ])

  const [brand, setBrand] = useState<string[]>([])
  const [name, setName] = useState<string[]>([])
  const [car, setCar] = useState<ICar>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICreateAnnouncementModal>({
    resolver: yupResolver(CreateAnnouncementModalSchema)
  })

  const Test = (data: ICreateAnnouncementModal) => {
    const { image } = data

    const { brand, model, year, fuel, mileage, color, fipe, price } = data

    const newData: IAnnouncement = {
      brand,
      model,
      year,
      fuel,
      mileage,
      color,
      fipe,
      price,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      published: true,
      images: [{ img_url: image }]
    }

    createAnnouncement(newData)
  }

  const getBrands = async () => {
    try {
      const { data } = await kenzieKars.get('/cars')
      const brandsArr = Object.keys(data)
      setBrand(brandsArr)
    } catch (error) {
      console.log(error)
    }
  }

  const getModels = async () => {
    try {
      const { data } = await kenzieKars.get(`/cars?brand=${optionsSelected.brand}`)
      const nameArr: string[] = []
      data!.forEach((e: any) => nameArr.push(e.name))
      setName(nameArr)
      const carFiltred = data.filter((e: any) => e.name === optionsSelected.name)
      if (carFiltred[0].fuel == 1) {
        carFiltred[0].fuel = 'Flex'
      } else if (carFiltred[0].fuel == 2) {
        carFiltred[0].fuel = 'Gasolina'
      } else {
        carFiltred[0].fuel = 'Eletrico'
      }
      setCar(carFiltred[0])
      console.log(carFiltred)
    } catch (error) {
      console.log(error)
    }
  }

  const [optionsSelected, setOptionsSelected] = useState({
    brand: '',
    name: '',
    year: ''
  })

  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    getBrands()
  }, [])

  useEffect(() => {
    getModels()
  }, [optionsSelected])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent display={'flex'} justifyContent={'center'} alignContent={'center'}>
        <ModalHeader>Criar anuncio</ModalHeader>
        <ModalCloseButton />

        <ModalBody as={'form'} p={{ base: '0px 14px 0px 20px', md: '0px 24px 0px 30px' }} display={'flex'} flexDir={'column'} gap={'24px'} onSubmit={handleSubmit(Test)}>
          <Text variant={'body-2-500'} color={'grey_scale.grey0'} pb={'24px'}>
            Infomações do veículo
          </Text>

          <FormControl>
            <FormLabel>Marca</FormLabel>
            <Select
              placeholder={'Mercedes Benz'}
              {...register('brand')}
              onChange={(e) => {
                setOptionsSelected({ ...optionsSelected, brand: e.target.value })
              }}
            >
              {brand.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Select
              placeholder={'A 200 CGI ADVANCE SEDAN'}
              {...register('model')}
              onChange={(e) => {
                setOptionsSelected({ ...optionsSelected, name: e.target.value })
              }}
            >
              {name.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </FormControl>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Ano</FormLabel>
              <Input placeholder={'2023'} value={car?.year} {...register('year')} />
            </FormControl>

            <FormControl>
              <FormLabel>Combustível</FormLabel>
              <Input placeholder={'Flex'} value={car?.fuel} {...register('fuel')} />
            </FormControl>
          </Flex>

          <Flex gap={3}>
            <Inputs id={'mileage'} label={'Quilometragem'} type={'text'} placeholder={'30.000'} register={register} errors={errors} />
            <Inputs id={'color'} label={'Cor'} type={'text'} placeholder={'Branco'} register={register} errors={errors} />
          </Flex>

          <Flex gap={3}>
            <FormControl>
              <FormLabel>Preço tabela FIPE</FormLabel>
              <Input id="fipe" placeholder={'R$ 48.000,00'} value={car?.value ? `R$ ${car?.value.toLocaleString('pt-BR')},00` : 'R$ 48.000,00'} {...register('fipe')} />
            </FormControl>

            <Inputs id={'price'} label={'Preço'} type={'text'} placeholder={'R$ 50.000,00'} register={register} errors={errors} />
          </Flex>

          {/* <Textareas
            id={"description"}
            label="Descrição"
            placeholder="Digitar descrição"
          /> */}

          {inputModal.map((item, index) => {
            return <Inputs key={index} id={'image'} label={index !== 0 ? index + ' ' + item.label : item.label} type={item.type} placeholder={item.placeholder} register={register} errors={errors} />
          })}

          {/*
          
          <Inputs
            id={"img"}
            label={"Imagem da capa"}
            type="text"
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          <Inputs
            id={"img"}
            label={"1° Imagem da galeria"}
            type={"text"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          />

          <Inputs
            id={"img"}
            label={"2° Imagem da galeria"}
            type={"text"}
            placeholder={"https://image.com"}
            register={register}
            errors={errors}
          /> */}

          <Button
            variant={'brand_opacity'}
            alignSelf={'start'}
            fontSize={{ base: '.75rem', md: '0.875rem' }}
            maxW={'315px'}
            onClick={() =>
              setInputModal([
                ...inputModal,
                {
                  label: 'Imagem da capa',
                  type: 'text',
                  placeholder: 'https://image.com'
                }
              ])
            }
          >
            Adicionar campo para imagem da galeria
          </Button>
          <Stack spacing={4} direction="row" alignSelf={'end'} p={'42px 0px 18px 0px'}>
            <Button variant={'brand_opacity'} color={'grey_scale.grey2'} colorScheme="blue" onClick={onClose}>
              Cancelar
            </Button>
            <Button type={'submit'} variant={'outline2'}>
              Criar anúncio
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CreateAnnouncementModal
