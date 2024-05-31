import type { HTMLInputTypeAttribute } from 'react';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import type { Control, FieldValues } from 'react-hook-form';
import type { LucideIcon } from 'lucide-react';

type InputFieldProps = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  inputType?: HTMLInputTypeAttribute;
  placeholder?: string;
  formDescription?: string;
  startIcon?: LucideIcon;
  endIcon?: LucideIcon;
  iconAction?: () => void;
  onBlur?: () => void;
}

export default function InputField ({ control, name, label, inputType, placeholder, formDescription, startIcon, endIcon, iconAction, onBlur }: InputFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
        <FormControl>
            <Input
              type={inputType || 'text'}
              placeholder={placeholder || ''}
              startIcon={startIcon}
              endIcon={endIcon}
              iconAction={iconAction}
              {...field}
              onBlur={() => {
                if (onBlur) {
                  onBlur();
                }
                field.onBlur();
              }}
            />
          </FormControl>
          {formDescription && <FormDescription>{formDescription}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}