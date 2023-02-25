import { FormControl, FormLabel, FormErrorMessage, Input, Textarea, Button } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Layout } from '@/components/layout/MainLayout'
import yup from '@/lib/yup.locale'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    body: yup.string().required(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      body: '',
    },
  })

  const onSubmit = (data: FormData) => console.log(data)
  console.log(errors)
  return (
    <Layout>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>お名前</FormLabel>
            <Input type='text' {...register('name')} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>メールアドレス</FormLabel>
            <Input type='text' {...register('email')} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.body}>
            <FormLabel>お問い合わせ内容</FormLabel>
            <Textarea size='sm' resize={'vertical'} {...register('body')} />
            <FormErrorMessage>{errors.body?.message}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
            Submit
          </Button>
        </form>
      </>
    </Layout>
  )
}
