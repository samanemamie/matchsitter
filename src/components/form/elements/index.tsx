import { default as InputOriginal } from '@/components/ui/input'
import { SelectTrigger as SelectTriggerOriginal } from '@/components/ui/select'
import { default as TextAreaOriginal } from '@/components/ui/Textarea'
import withFormState from '@/lib/hocs/withFormState'

export const SelectTrigger = withFormState(SelectTriggerOriginal)
export const Input = withFormState(InputOriginal)
export const TextArea = withFormState(TextAreaOriginal)
