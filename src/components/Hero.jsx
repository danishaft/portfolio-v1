function Hero() {
    return(
        <div className="hero w-full grid grid-cols-1 gap-4 my-11 md:my-28 md:grid-cols-2">
          <div className=" hero-text w-full flex flex-col justify-center">
            <h2>Hello, I'm <br></br> <span className="tracking-wider font-bold">EJEH DANIEL</span></h2>
            <p className="intro-text grey  py-6">I’m a frontend developer specialising in making digital products come to life. I build innovative products that solve user needs.</p>
            <p className="view-projectBtn intro-text"><a href="#works"><span className="grey">See</span> Projects</a></p>
          </div>   
          <div className="hero-img">
            <img className="w-full rounded-3xl" src="profile-pic.png" alt="Profile Photo" />
          </div>
        </div>
    )
}

export default Hero