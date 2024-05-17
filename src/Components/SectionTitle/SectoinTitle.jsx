

const SectoinTitle = ({smallTitle, largeTitle}) => {
    return (
        <div className="text-center py-10 inter flex justify-center flex-col  items-center gap-3">
           <p  className="text-yellow-600 text-xl italic">---{smallTitle}---</p> 
           <p className="text-white py-5 border-y-4 px-16 text-4xl border-gray-600 ">{largeTitle}</p>
        </div>
    );
};

export default SectoinTitle;