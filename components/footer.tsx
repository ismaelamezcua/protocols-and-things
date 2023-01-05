export default function Footer() {
  return (
    <div className="container mx-auto max-w-6xl pt-28 pb-14">
      <div className="gid-cols-1 grid gap-28 md:grid-cols-3">
        <div>
          <h3 className="text-2xl">Protocols&amp;Things</h3>
          <p>&copy; Copyright 2023 Ismael Amezcua Valdovinos.</p>
        </div>
        <div className="justify-center">
          <h2 className="text-3xl pb-4">Sign up to our newsletter!</h2>
          <input
            className="bg-[#F6F4F1] w-full"
            type="text"
            name="newsletter-email"
            placeholder="Email"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <p>Home</p>
          <p>Blog</p>
          <p>Lifestyle</p>
          <p>Design</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
