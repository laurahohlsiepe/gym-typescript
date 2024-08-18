import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt='logo' src={Logo} />
                <p className="my-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                </p>
                <p>
                © Evogym All Rights Reserved. 
                </p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem ipsum dolor sit amet</p>
                <p className="my-5">Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet</p>
                <p>(111) 333 444</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer