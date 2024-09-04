import { FiInstagram } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Contact: React.FC = () => {
    return (
        <div id="contacto" className="flex flex-col items-center bg-gray-300">
            <h2 className="mt-10 font-subtitles text-4xl text-gray-900">Contacto</h2>
            <div className="flex flex-wrap grow justify-center content-start m-10">
                <div className="flex bg-gray-400 p-3 m-5 w-96 h-16 items-center">
                    <BiLogoGmail className="text-4xl mr-3" />
                    <p className="text-2xl">elbigote.contacto@gmail.com</p>
                </div>
                <a href="https://www.instagram.com/elbigotedehoracio/" target="_blanck">
                    <div className="flex bg-gray-400 p-3 m-5 w-96 h-16 items-center">
                        <FiInstagram className="text-4xl mr-3" />
                        <p className="text-2xl">@elbigotedehoracio</p>
                    </div>
                </a>
                <a
                    href="https://open.spotify.com/intl-es/artist/7r6I9Sd8gyxqkVyZJiYlKn?si=e8FfPop4Saa-O1dB4nKqAQ"
                    target="_blanck"
                >
                    <div className="flex bg-gray-400 p-3 m-5 w-96 h-16 items-center">
                        <SlSocialSpotify className="text-4xl mr-3" />
                        <p className="text-2xl">El Bigote de Horacio</p>
                    </div>
                </a>
                <a href="https://www.youtube.com/@elbigotedehoracio2018" target="_blanck">
                    <div className="flex bg-gray-400 p-3 m-5 w-96 h-16 items-center">
                        <AiOutlineYoutube className="text-4xl mr-3" />
                        <p className="text-2xl">El Bigote de Horacio</p>
                    </div>
                </a>
                <div className="flex bg-gray-400 p-3 m-5 w-96 h-16 items-center">
                    <FiPhone className="text-4xl mr-3" />
                    <p className="text-2xl">358 439-6332</p>
                </div>
            </div>
            <p className="h-16">Página diseñada y creada por Joaquín Klein</p>
        </div>
    );
};

export default Contact;
