const Footer = () => {
    return (
        <section
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p></p>
                <p>Privacy Policy</p>
            </div>
            <div className="Flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2"/>
                </div>
            </div>
            <div className="Flex gap-3">
                <div className="social-icon">
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2"/>
                </div>
            </div>
            <div className="Flex gap-3">
                <div className="social-icon">
                    <img src="/assets/instagram.svg" alt="GitHub" className="w-1/2 h-1/2"/>
                </div>
            </div>
            <p className="text-white-500">
                &copy; 2025 Pedro Stein. Todos os direitos reservados.
            </p>
        </section>
    )
}
export default Footer