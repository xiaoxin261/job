import { ElMessage } from 'element-plus'

type MessageOptions = {
  message?: string
  type?: 'success' | 'warning' | 'info' | 'error'
  duration?: number
}

let messageInstance: ReturnType<typeof ElMessage> | null = null

const resetMessage = (options: MessageOptions | string) => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = ElMessage(
    typeof options === 'string' ? { message: options } : options
  )
}

const messageTypes = ['error', 'success', 'info', 'warning'] as const

messageTypes.forEach(type => {
  (resetMessage as any)[type] = (options: string | MessageOptions) => {
    if (typeof options === 'string') {
      options = { message: options }
    }
    options.type = type
    return resetMessage(options)
  }
})

export const message = resetMessage as typeof resetMessage & {
  error: (options: string | MessageOptions) => void
  success: (options: string | MessageOptions) => void
  info: (options: string | MessageOptions) => void
  warning: (options: string | MessageOptions) => void
}
