import { useEffect, useState } from 'react'

function Saying() {

    const saying = [{ saying: '가는 말이 고우면 얕본다', author: '박명수' },
    { saying: '내일도 할 수 있는 일을 굳이 오늘 할 필요 없다 ', author: '쩜오' },
    { saying: '고생 끝에 골병 난다', author: '하찮은' },
    { saying: '티끌 모아 티끌', author: '박거성' }]

    const [idx, setIdx] = useState(0);
    const [sayings, setSayings] = useState([{ saying: '111', author: 'kim' }]);

    // useEffect(() => {
    //     let sayingInt = setInterval(() => {

    //         if (idx > 4) {
    //             setIdx(0);
    //         } else {
    //             setIdx(prev => prev + 1);
    //             setSayings(saying[idx]);
    //         }

    //     }, 2000)
    //     return () => {
    //         clearInterval(sayingInt);
    //     }

    // }, [idx])
    // console.log(idx);

    useEffect(() => {
        let sayingInt = setInterval(() => {
            setIdx(prev => (prev + 1) % saying.length);
            setSayings(saying[idx]);
        }, 5000);

        return () => {
            clearInterval(sayingInt);
        };
    }, [idx]);

    return (
        <div className="saying">
            <p>{sayings.saying}</p>
            <p>{`-${sayings.author}`}</p>

        </div>
    )
}

export default Saying