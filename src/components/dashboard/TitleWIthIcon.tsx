import type { LucideProps } from 'lucide-react';

type TitleWIthIconProps = {
  title: string,
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
}

export default function TitleWIthIcon({ title, icon:Icon }: TitleWIthIconProps) {
  return (
    <h3 className='mb-10 flex items-center gap-2'>
      <Icon className='inline-block' size={32}/>
      {title}
    </h3>
  );
}
