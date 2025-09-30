import React from 'react';
import { motion } from 'framer-motion';

const Backend = () => {
  return (
    <motion.div 
      className="skills__content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

           <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Spring Data JPA</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div> 

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name"> Postman </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Backend;
