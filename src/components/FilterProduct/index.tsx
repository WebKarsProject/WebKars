import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { VehicleContext } from '../../contexts/Vehicle/VehicleContexts'
import { kenzieApiContext } from '../../contexts/kenzieApi/kenzieApiContext'
import { IVehicle } from '../../interface'

const FilterProduct = () => {
  const [isLarger] = useMediaQuery('(min-width: 650px)')
  const { adVehicle, setFiltred, filtred } = useContext(VehicleContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      {isLarger ? (
        <Flex width={'25%'} display={'flex'} flexDirection={'column'} fontFamily={'Lexend'}>
          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Marca
              </Heading>
            </Stack>
            <Stack padding={'10px'} color={'#868E96'} fontSize={'16px'}>
              {[...new Set(adVehicle.map((e) => e.brand))].map((item) => (
                <Text key={item} onClick={() => setFiltred({ ...filtred, brand: item })} textColor={item === filtred.brand ? 'grey_scale.grey0' : 'inherit'}>
                  {item}
                </Text>
              ))}
            </Stack>
          </Flex>

          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Modelo
              </Heading>
            </Stack>
            <Stack p="10px 10px 0 10px" color={'#868E96'} fontSize={'16px'}>
              {[
                ...new Set(
                  adVehicle.map((e) => {
                    return e.model.split(' ')[0]
                  })
                )
              ].map((item) => (
                <Text key={item} onClick={() => setFiltred({ ...filtred, model: item })} textColor={item === filtred.model ? 'grey_scale.grey0' : 'inherit'}>
                  {item}
                </Text>
              ))}
            </Stack>
          </Flex>

          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Cor
              </Heading>
            </Stack>
            <Stack p="10px 10px 0 10px" color={'#868E96'} fontSize={'16px'}>
              {[...new Set(adVehicle.map((e) => e.color))].map((item) => (
                <Text key={item} onClick={() => setFiltred({ ...filtred, color: item })} textColor={item === filtred.color ? 'grey_scale.grey0' : 'inherit'}>
                  {item}
                </Text>
              ))}
            </Stack>
          </Flex>

          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Ano
              </Heading>
            </Stack>
            <Stack p="10px 10px 0 10px" color={'#868E96'} fontSize={'16px'}>
              {[...new Set(adVehicle.map((e) => e.year))].map((item) => (
                <Text key={item} onClick={() => setFiltred({ ...filtred, year: item })} textColor={item === filtred.year ? 'grey_scale.grey0' : 'inherit'}>
                  {item}
                </Text>
              ))}
            </Stack>
          </Flex>

          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Combustível
              </Heading>
            </Stack>
            <Stack p="10px 10px 0 10px" color={'#868E96'} fontSize={'16px'}>
              {[...new Set(adVehicle.map((e) => e.fuel))].map((item) => (
                <Text key={item} onClick={() => setFiltred({ ...filtred, fuel: item })} textColor={item === filtred.fuel ? 'grey_scale.grey0' : 'inherit'}>
                  {item}
                </Text>
              ))}
            </Stack>
          </Flex>

          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Km
              </Heading>
            </Stack>

            <Flex display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} paddingBottom={'17px'} paddingTop={'17px'}>
              <Input w={'125px'} bg={'#CED4DA'} placeholder={'Mínimo'} />
              <Input w={'125px'} bg={'#CED4DA'} placeholder={'Máximo'} />
            </Flex>
          </Flex>

          <Flex display={'flex'} flexDirection={'column'}>
            <Stack>
              <Heading fontWeight={'bold'} fontSize={'28px'}>
                Preço
              </Heading>
            </Stack>
            <Flex display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'20px'} paddingBottom={'17px'} paddingTop={'17px'}>
              <Input w={'125px'} bg={'#CED4DA'} placeholder={'Mínimo'} />
              <Input w={'125px'} bg={'#CED4DA'} placeholder={'Máximo'} />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Box display={'flex'} flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginBottom={'15px'} gap={'10px'}>
              <Button bg={'#5126EA'} border={'1.5px solid #5126EA'} borderRadius={'4px'} color={'white'} onClick={onOpen} width={'60%'} mt="20px">
                Filtros
              </Button>
            </Box>
          </Flex>
          <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Filtros</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={8}>
                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Marca
                  </FormLabel>
                  <Stack color={'#868E96'} fontSize={'16px'} marginLeft={'15px'}>
                    {[...new Set(adVehicle.map((e) => e.brand))].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Modelo
                  </FormLabel>
                  <Stack color={'#868E96'} fontSize={'16px'} marginLeft={'20px'}>
                    {[
                      ...new Set(
                        adVehicle.map((e) => {
                          return e.model.split(' ')[0]
                        })
                      )
                    ].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Cor
                  </FormLabel>
                  <Stack color={'#868E96'} fontSize={'16px'} marginLeft={'20px'}>
                    {[...new Set(adVehicle.map((e) => e.color))].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Ano
                  </FormLabel>
                  <Stack color={'#868E96'} fontSize={'16px'} marginLeft={'20px'}>
                    {[...new Set(adVehicle.map((e) => e.year))].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Combustível
                  </FormLabel>
                  <Stack color={'#868E96'} fontSize={'16px'} marginLeft={'20px'}>
                    {[...new Set(adVehicle.map((e) => e.fuel))].map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Km
                  </FormLabel>
                  <Flex color={'#868E96'} fontSize={'16px'} marginLeft={'20px'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'1rem'} paddingBottom={'17px'} paddingTop={'17px'}>
                    <Input bg={'#CED4DA'} placeholder={'Mínimo'} />
                    <Input bg={'#CED4DA'} placeholder={'Máximo'} />
                  </Flex>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight={'bold'} fontSize={'20px'} padding={'5px'}>
                    Preço
                  </FormLabel>
                  <Flex color={'#868E96'} fontSize={'16px'} marginLeft={'20px'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'1rem'} paddingBottom={'17px'} paddingTop={'17px'}>
                    <Input bg={'#CED4DA'} placeholder={'Mínimo'} />
                    <Input bg={'#CED4DA'} placeholder={'Máximo'} />
                  </Flex>
                </FormControl>
              </ModalBody>

              <ModalFooter display={'flex'} justifyContent={'center'}>
                <Button bg={'#5126EA'} border={'1.5px solid #5126EA'} borderRadius={'4px'} onClick={onClose} color={'white'}>
                  Ver anúncios
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )}
    </>
  )
}
export default FilterProduct
