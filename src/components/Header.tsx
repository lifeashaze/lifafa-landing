import Image from 'next/image'

export function Header(){
    return (
        <>
        <div className="flex justify-between p-5">
        <img src="./logo.svg" alt="" className='hover:cursor-pointer'/>
            
            <button className='px-7 rounded-xl bg-primary border-2 border-background-dark shadow-[#282C6E] hover:shadow-[3px_3px_0px_0px_rgba(40,44,110,1)] transition-all hover:translate-y-[-3px] hover:translate-x-[-3px] mb-[-1px] md:ml-[-1px]'>Contact Us</button>
        </div>
        </>
    )
}