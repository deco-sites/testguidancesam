function Footer() {
  return (
    <footer className="bg-[#333333] text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              Departamentos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary">Início</a>
              </li>
              <li>
                <a href="#" className="text-primary">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="#" className="text-primary">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-primary">
                  Prazos de Envio e Entregas
                </a>
              </li>
              <li>
                <a href="#" className="text-primary">Política de Reembolso</a>
              </li>
              <li>
                <a href="#" className="text-primary">Termos e Condições</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary">Início</a>
              </li>
              <li>
                <a href="#" className="text-primary">Camisas Retrô</a>
              </li>
              <li>
                <a href="#" className="text-primary">Camisas Novas</a>
              </li>
              <li>
                <a href="#" className="text-primary">Infantil</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary">Blog</a>
              </li>
              <li>
                <a href="#" className="text-primary">Newsletter</a>
              </li>
              <li>
                <a href="#" className="text-primary">Eventos</a>
              </li>
              <li>
                <a href="#" className="text-primary">Ajuda</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary">Termos de Serviço</a>
              </li>
              <li>
                <a href="#" className="text-primary">Política de Cookies</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-primary">
              Se inscreva na nossa newsletter
            </h3>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Email" />
              <button type="submit" className="w-full">Inscrever</button>
            </form>
            {
              /* <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground text-primary">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground text-primary">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground text-primary">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground text-primary">
                <aedin size={24} />
                <span className="sr-only">aedIn</span>
              </a>
              <a href="#" className="text-muted-foreground text-primary">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div> */
            }
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground/10 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
