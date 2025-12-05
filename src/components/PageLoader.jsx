import { motion } from "framer-motion";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
            <div className="flex space-x-2">
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                            y: ["0%", "-100%", "0%"],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default PageLoader;
