import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
export const Exp = () => {
    return <section id= "exp">
          <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}> */}
          {/* What I have done so far */}
          {/* My Academic Journey. */}
        {/* </p> */}
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
      </motion.div>
    <div>
    
        <div>
        <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
        <div><img src={technology.icon}></img></div>
        </div>
      ))}
    </div>
        </div>
    </div>
    </section>
};

export default SectionWrapper(Exp, "");