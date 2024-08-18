import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const contactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
   <section id="contactus" className="mx-auto w-5/6 pt-24 pb-42">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        { /* HEADER */ }
        <motion.div
        className="md:w-3/5"
        initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{ 
                hidden: { opacity: 0, x: -100},
                visible: { opacity: 1, x: 0}
            }}>
                <HText>
                    <span className="text-primary-500">JOIN NOW</span>
                </HText>

                <p className="my-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
     </motion.div>

     { /* FORM AND IMAGE*/ }

     <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div 
           className="mt-10 basis-3/5 md:mt-0"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{ 
               hidden: { opacity: 0, y: 50},
               visible: { opacity: 1, x: 0}
           }}>

            <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.com/test@gmail.com"
            method="POST">
           <input 
            className={inputStyles}
            type="text"
            placeholder="NAME"
            {...register("name", {
                required: true,
                maxLength: 100,
            })}
           /> 
           {errors.name && (
            <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max Length is 100 characters."}
            </p>
           )}

            <input 
            className={inputStyles}
            type="text"
            placeholder="EMAIL"
            {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
           /> 
           {errors.email && (
            <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid Email Address"}
            </p>
           )}

            <textarea 
            className={inputStyles}
            rows={4}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", {
                required: true,
                maxLength: 2000,
            })}
           /> 
           {errors.message && (
            <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max Length is 2000 characters."}
            </p>
           )}

           <button
           type="submit"
           className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
            SUBMIT
           </button>
            </form>
        </motion.div>
     </div>
    </motion.div>
   </section>
  )
}

export default contactUs