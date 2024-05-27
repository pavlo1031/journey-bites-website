'use client';

import { Control, FieldValues } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';

type TextAreaFieldProps = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  placeholder?: string;
  formDescription?: string;
}

export default function TextAreaField({ control, name, label, placeholder, formDescription }: TextAreaFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
              <Textarea
                placeholder={placeholder || ''}
                {...field}
              />
          </FormControl>
          {formDescription && <FormDescription>{formDescription}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
