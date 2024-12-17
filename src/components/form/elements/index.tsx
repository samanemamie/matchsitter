import withFormState from '@/lib/hocs/withFormState'
import { SelectTrigger as SelectTriggerOriginal } from '@/components/ui/select'
import { default as InputOriginal } from '@/components/ui/input'

export const SelectTrigger = withFormState(SelectTriggerOriginal)
export const Input = withFormState(InputOriginal)
