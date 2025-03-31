import {useRef, useState} from "react";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = () => {
    }
    const handleSubmit = () => {
    }
    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="Terminal background"
                    className="w-full h-full object-cover absolute inset-0"
                />
                <div className="contact-container relative z-10">
                    <h3 className="head-text">
                        Let's talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        I am a beginner in the programming field,
                        passionate about continuous learning and eager to tackle challenges.
                        I'm open to development internships, confident that my growing skills and hands-on
                        experience will significantly strengthen my expertise.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name:
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Matheus Stein"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Email:
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="email@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                :
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Matheus Stein"
                            />
                        </label>

                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;
