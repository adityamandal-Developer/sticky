import React from "react";
import { LuFileSignature } from "react-icons/lu";
import { BiCloudDownload } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ item, refrence }) {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 bg-zinc-900/90 w-60 h-72 rounded-[40px] text-white p-6 overflow-hidden "
    >
      <LuFileSignature />
      <p className="text-sx mt-2 font-semibold font-sans leading-tight tracking-wide ">
        {item.description}
      </p>
      {/* footer of card */}
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 mb-3  px-5">
          <h6 className="font-sans">{item.filesize}</h6>

          <span className="flex bg-zinc-600 rounded-full h-6 w-6 justify-center items-center">
            {/* icons */}
            {item.close ? (
              <IoClose color="white" />
            ) : (
              <BiCloudDownload color="white" />
            )}
          </span>
        </div>

        {/* tags */}
        {item.tags.isopen && (
          <div
            className={`tag w-full py-4 ${
              item.tags.color === "green" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="font-semibold">{item.tags.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
