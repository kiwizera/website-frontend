import { home } from "@/app/resources/content"

export const Slider = () => {
    return (
        <div>
            {home.slider.map((slide, index) => (
                <div key={index}>
                    <img 
                        src={slide.imageURL}
                        alt={slide.title}
                        className="w-full h-auto rounded-2xl shadow-lg"
                        loading="lazy"
                    />
                    <div className="w-full px-3 mt-4">
                        <div className="w-full h-[2px] bg-white"></div>
                    </div>
                    
                    <div className="w-5/12 mt-6 px-6">
                        <h2 className="text-2xl font-bold">{slide.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}