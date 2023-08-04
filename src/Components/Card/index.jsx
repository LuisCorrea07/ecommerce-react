const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 roundedlg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm">Mates</span>
                    <img src='https://instagram.fsla1-1.fna.fbcdn.net/v/t51.2885-15/355841054_218207371112834_7703510476519400076_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsla1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=iilnMb5SuNAAX9jkiag&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEzMjQ0NjUwNzY5ODMwNTU3OA%3D%3D.2-ccb7-5&oh=00_AfCkGEhWo8WP3QLyZdeLLOI14AhWI9mOIrLMmqWksBJC2A&oe=64D10C6C&_nc_sid=ee9879' alt="mate camionero"/>
                    <div className="absolute top-0 right-0 flex justify-center item-center bg-white w-6 h-6 rounded-full">
                        +
                    </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Mate Camionero</span>
                <span className="text-lg font-medium">$30000</span>
            </p>
        </div>
    )
}
export default Card