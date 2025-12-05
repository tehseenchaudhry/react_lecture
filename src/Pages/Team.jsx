import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Aisha Khan",
            role: "UI/UX Designer",
            image: "https://i.pravatar.cc/200?img=47",
        },
        {
            id: 2,
            name: "Sara Ahmed",
            role: "Frontend Developer",
            image: "https://i.pravatar.cc/200?img=48",
        },
        {
            id: 3,
            name: "Zara Malik",
            role: "Project Manager",
            image: "https://i.pravatar.cc/200?img=49",
        },
        {
            id: 4,
            name: "Fatima Chaudhry",
            role: "React Developer",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 py-16 px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-3">
                    Meet Our Lovely Team 💕
                </h1>
                <p className="text-gray-600 text-lg">
                    Creative minds who make our projects shine bright ✨
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-28 h-28 rounded-full border-4 border-pink-300 mb-4 object-cover"
                        />
                        <h2 className="text-lg font-semibold text-purple-700">
                            {member.name}
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">{member.role}</p>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-pink-400 hover:text-pink-600 transition-all"
                            >
                                <FaInstagram className="text-xl" />
                            </a>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-700 transition-all"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 transition-all"
                            >
                                <FaGithub className="text-xl" />
                            </a>

                        </div>
                        <Link to={`/team/${member.id}`}><button className="px-4 py-1 bg-purple-700 rounded cursor-pointer text-white text-[12px] mt-5">Details</button></Link>
                    </div>
                ))}
            </div>

            <Outlet />

        </div>
    );
};

export default Team;
