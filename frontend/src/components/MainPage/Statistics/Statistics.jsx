
import chat_1 from '../../../assets/images/icons/chat-fill.svg'
import chat_2 from '../../../assets/images/icons/chat-square-text-fill.svg'
import like from '../../../assets/images/icons/like.svg'
import pencil from '../../../assets/images/icons/pencil-fill.svg'
import person from '../../../assets/images/icons/person-fill.svg'

import './Statistics.css'

export default function Statistics() {

    return (

        <div className="px-3 pb-3 background_rounded bg-white" id="div1">
            <div className="text mb-3">
                <p>Статистика</p>
            </div>

            <div className="statistic_item mt-2 rounded-1" data-tooltip="73453">
                <img src={pencil} alt="posts" />

                <p className="m-0">
                    Посты
                </p>

                <div className="ms-auto tooltip-trigger">
                    <p className="counter">
                        73453
                    </p>
                </div>

            </div>

            <div className="statistic_item mt-2 rounded-1" data-tooltip="987654321012">
                <img src={chat_2} alt="comments" />

                <p className="m-0">
                    Комментарии
                </p>

                <div className="ms-auto tooltip-trigger">
                    <p className="counter">
                        987654321012
                    </p>
                </div>

            </div>

            <div className="statistic_item mt-2 rounded-1" data-tooltip="12673800">
                <img src={like} alt="grades" />

                <p className="m-0">
                    Оценки
                </p>

                <div className="ms-auto tooltip-trigger">
                    <p className="counter">
                        12673800
                    </p>
                </div>

            </div>

            <div className="statistic_item mt-2 rounded-1" data-tooltip="123">
                <img src={person} alt="users" />

                <p className="m-0">
                    Пользователи
                </p>

                <div className="ms-auto tooltip-trigger">
                    <p className="counter">
                        123
                    </p>
                </div>

            </div>


            <div className="statistic_item mt-2 rounded-1" data-tooltip="0">
                <img src={chat_1} alt="messages" />

                <p className="m-0">
                    Сообщения
                </p>

                <div className="ms-auto tooltip-trigger">
                    <p className="counter">
                        0
                    </p>
                </div>

            </div>

        </div>


    )

}