import { footerLinks } from "@/constants";
import Image from "next/image"
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>
}

const FooterColum = ({title, links}: ColumnProps) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold">{title}</h4>
    <ul>
      {links.map((link) => (
        <Link href='/' key={link}>{link}</Link>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  return (
    <footer className="flex items-center justify-start flex-col paddings w-full gap-20 bg-light-white">
      <div className="flex flex-col gap-12 w-full">
        <Image 
          src='/logo-purple.svg'
          width={115}
          height={38}
          alt='Flexibble'
        />

        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          Flexible is the world's leading community for creative, share, grow and get hired.
        </p>
      </div>

      <div className="flex flex-wrap gap-12">
        <FooterColum title={footerLinks[0].title} links={footerLinks[0].links} />
        <div className="flex-1 flex flex-col gap-4">
          <FooterColum title={footerLinks[1].title} links={footerLinks[1].links} />
          <FooterColum title={footerLinks[2].title} links={footerLinks[2].links} />
        </div>
        <FooterColum title={footerLinks[3].title} links={footerLinks[3].links} />
        <div className="flex-1 flex flex-col gap-4">
          <FooterColum title={footerLinks[4].title} links={footerLinks[4].links} />
          <FooterColum title={footerLinks[5].title} links={footerLinks[5].links} />
        </div>
        <FooterColum title={footerLinks[6].title} links={footerLinks[6].links} />
      </div>

      <div className='flex justify-between items-center max-sm:flex-col w-full text-sm font-normal'>
        <p>@ 2023 Flexible. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects submitted.
        </p>
      </div>  
    </footer>
  )
}

export default Footer
