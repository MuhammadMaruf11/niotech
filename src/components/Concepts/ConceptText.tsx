'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const ConceptText: FC = () => {
    return (
        <div className="space-y-6">
            <motion.p
                className="font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Home Automation Concepts
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Home automation is connecting all the functional elements of your home to a network (Internet) and putting it to work for you. From lighting to air-conditioning, from television to door-locks, you can now control, monitor and track your home from anywhere in the world, using your smartphone, computer or tablet device. To help you get started with home automation, we have divided the home automation experience into individual concepts.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Think of concepts ⭐️ as the building blocks of your smart home lifestyle ?.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Unlike a car, where you have to build the whole system to make it work, you don’t have to buy the entire home automation experience to kickstart an intelligent lifestyle. You can start with any of the home automation concepts, and build your smart home from there. ?
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <strong>Smart Lighting:</strong> Our smart lighting solutions are instant mood setters. Want to turn your living room into a discotheque, or want to create a romantic setup in your bedroom? Setting mood and changing colour is now as easy as pressing a button on your smartphone. What’s more? These smart lighting solutions also allow you to create personalized schedules, which means you can have them turned on by evening and turned off automatically when you’re off to bed. They can even be automated to simulate an ‘occupied home’ appearance and can be triggered remotely from anywhere in the world.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <strong>Intelligent Security:</strong> Protect your home from intruders with our intelligent security solutions. Once configured, door/window and motion sensors notify you when someone tries to break in your home, when you’re away. As an expansion to the range, we also have wireless doorbells and intelligent locks that provide an additional level of security and mental peace.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <strong>Interactive Home:</strong> You no longer have to reach out to switchboards or operate a dozen remotes to get things done. You can now control everything in your home through your smartphone or by just using your voice.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                <strong>Multimedia:</strong> Smart multimedia control gives you the flexibility to control your TV, Xbox or music player wirelessly from your smartphone. Our smart home multimedia solutions also provided advanced features like multi-room playback, specialized scenes, wireless streaming and more.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <strong>Energy Efficiency:</strong> Use the power of technology to save money. Our intelligent sensors automatically turn off your air-conditioner, lights and fans when you’re not home. If that’s not enough, we also give you insights into how much energy you’re consuming and how you can save by creating personalized schedules.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                <strong>Protection:</strong> Get instant alerts on your smartphone when your home is hit by fire, flood or any other disaster. You can also configure the central automation system to take corrective action instantly. For eg. Trigger an alarm, turn on the lights to capture attention or automatically disable all locks in the home for quick evacuation.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <strong>Climate Control:</strong> Home automation takes comfort to the next level. You can now keep track of ambient temperature across corners and automatically send commands to your central cooling unit to facilitate optimum cooling. You can also intelligently save energy by automatically turning off AC/cooling system if a window/door is left open for too long.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
            >
                <strong>Surveillance:</strong> Keep a tab on your home, even while you’re away in the office or a vacation. With intelligent CCTV cameras that provide round-the-clock monitoring, staying connected with what matters is easy. The surveillance cameras can be installed standalone (wireless cameras) or can be configured to secure a covered area (NVR systems).
            </motion.p>
        </div>
    );
};

export default ConceptText;
