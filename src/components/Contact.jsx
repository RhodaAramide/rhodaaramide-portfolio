import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
    {
        icon: <FaPhoneAlt />,
        name: "Phone",
        info: "+234 81 0580 9460",
    },
    {
        icon: <FaEnvelope />,
        name: "Email",
        info: "olabisiabolarin5@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        name: "Address",
        info: "Ibadan, Oyo State, Nigeria",
    },
];

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        alert("Message sent successfully");
        // Add your Netlify form submission logic here
        fetch("/en", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        })
            .then(() => {
                console.log("Form submission successful");
                window.location.href = "/thank-you-page"; // Replace with your Netlify thank you page URL
            })
            .catch((error) => console.error("Form submission error:", error));
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            {/* Rest of the code */}
        </motion.section>
    );
};

export default Contact;
