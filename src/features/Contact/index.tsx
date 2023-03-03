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
        <FormLabel>お名前:</FormLabel>
        <Input type='text' {...register('name')} placeholder='例: 山田太郎' />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.email} mt={'16px'}>
        <FormLabel>メールアドレス:</FormLabel>
        <Input type='text' {...register('email')} placeholder='例: example@gmail.com' />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.body} mt={'16px'}>
        <FormLabel>お問い合わせ内容:</FormLabel>
        <Textarea {...register('body')} placeholder='こちらにお問い合わせ内容を入力してください' />
        <FormErrorMessage>{errors.body?.message}</FormErrorMessage>
      </FormControl>
      <Center>
        <Button
          mt={'16px'}
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
