import {useRef, useState} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            "service_nvvh7is", // ✅ Substitua pelo seu ID de serviço
            "template_xxxxxx", // ✅ Substitua pelo seu ID de template
            {
                from_name: form.name,
                to_name: "Pedro Stein",
                from_email: form.email,
                to_email: "seu@email.com", // ✅ Seu email
                message: form.message,
            },
            "YOUR_PUBLIC_KEY" // ✅ Substitua pela sua public key
        )
            .then(() => {
                setLoading(false);
                alert("Mensagem enviada com sucesso!");
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                alert("Erro ao enviar. Tente novamente.");
            });
    };

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
                        Let&apos;s talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        I am a beginner in the programming field,
                        passionate about continuous learning and eager to tackle challenges.
                        I&apos;m open to development internships, confident that my growing skills and hands-on
                        experience will significantly strengthen my expertise.
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label">Full Name:</span>
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
                            <span className="field-label">Email:</span>
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
                            <span className="field-label">Your message:</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi Pedro Stein, I'd love to talk to you about..."
                            />
                        </label>
                        <button
                            className="field-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
