import {useState} from 'react';

const WatchBlock = ({title, image, price}) => {
    const [watchCount, setWatchCount] = useState(0);

    const calcWatchCount = () => {
        setWatchCount(prev => prev + 1);
    };

    return (
        <div className="watch-block">
            <img
                className="watch-block__image"
                src={image}
                alt="watch"
            />
            <h4 className="watch-block__title">{title}</h4>
            <div className="watch-block__selector">
                <p>Материал:</p>
                <ul>
                    <li className="active">Сталь</li>
                    <li>Титан</li>
                </ul>
                <p>Корпус:</p>
                <ul>
                    <li>38 мм</li>
                    <li>41 мм</li>
                    <li className="active">44 мм</li>
                </ul>
            </div>
            <div className="watch-block__bottom">
                <div className="watch-block__price">от {price}.000 ₽</div>
                <button
                    onClick={calcWatchCount}
                    className="button button--outline button--add"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{watchCount}</i>
                </button>
            </div>
        </div>
    );
};

export default WatchBlock;