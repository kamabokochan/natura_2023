import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Center,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import yup from '@/lib/yup.locale'

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    body: yup.string().required(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      body: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      alert('送信しました')
      reset()
    } catch (error) {
      alert('送信に失敗しました。しばらく経ってからもう一度お試しください')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
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
      <Center>
        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting}
          type='submit'
          alignSelf={'flex-end'}
        >
          送信する
        </Button>
      </Center>
    </form>
  )
}
