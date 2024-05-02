import Link from "next/link";

const Header = () => {

    const urlList=[
        {
            text:"Home",url:"/"
        },
        {
            text:"contact Us",url:"/contact-us"
        },
        {
            text:"SignIn",url:"/signin"
        }

    ]

    return (
      <div className="bg-indigo-500 text-indigo-50">
        <header>
          <ul className="list-none flex justify-center gap-4">
            {
                urlList?.map((urlL,i)=>{
                    return(
                       <Link href={urlL?.url}><li className="p-2">{urlL?.text}</li></Link>
                    )
                })
            }
          </ul>
        </header>
      </div>
    );
  };
  export default Header;
