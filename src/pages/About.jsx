import React from "react"

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight ">
          We Love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to <span className="font-bold">Comfy Store</span>, your ultimate
        destination for all your shopping needs!
        <br />
        <br />
        <p>
          At <span className="font-bold">Comfy Store</span>, we pride ourselves
          on offering a diverse selection of high-quality products curated to
          cater to your every desire. Our mission is simple: to provide an
          unparalleled shopping experience that exceeds your expectations.
          Whether you're searching for the latest fashion trends, cutting-edge
          technology, or everyday essentials, we've got you covered.
        </p>
        <br />
        <p>
          With secure payment options, fast shipping, and top-notch customer
          support, you can shop with confidence knowing that your satisfaction
          is our priority. Thank you for choosing [Store Name]. Join us on this
          exciting adventure and discover the joy of shopping like never before!
        </p>
      </p>
    </>
  )
}

export default About
