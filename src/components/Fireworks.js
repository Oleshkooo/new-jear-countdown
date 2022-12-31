import { Fireworks as Fw } from '@fireworks-js/react'
import { motion, AnimatePresence } from 'framer-motion'

import './fireworks.scss'

const Fireworks = () => {
    return (
        <AnimatePresence>
            <motion.div className="fireworks__component"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Fw
                    className="fireworks__canvas"
                    options={{
                        rocketsPoint: {
                            min: 0,
                            max: 100,
                        },
                    }}
                />
            </motion.div>
        </AnimatePresence>
    )
}
export default Fireworks