
import chat_1 from '../../../../assets/images/icons/chat-fill.svg'
import chat_2 from '../../../../assets/images/icons/chat-square-text-fill.svg'
import like from '../../../../assets/images/icons/like.svg'
import pencil from '../../../../assets/images/icons/pencil-fill.svg'
import person from '../../../../assets/images/icons/person-fill.svg'

import './Statistics.css'

import StatisticItem from './StatisticItem/StatisticItem'

export default function Statistics() {

    return (

        <div className="px-3 pb-3 background_rounded bg-white" id="div1">

            <div className="text mb-3">
                <p>Статистика</p>
            </div>

            <StatisticItem statistic_item_name="Посты" logo={chat_1}>73453</StatisticItem>

            <StatisticItem  statistic_item_name="Комментарии"  logo={chat_2}>987654321012</StatisticItem>

            <StatisticItem statistic_item_name="Оценки"  logo={like}>12673800</StatisticItem>

            <StatisticItem  statistic_item_name="Пользователи" logo={pencil}>123</StatisticItem>

            <StatisticItem statistic_item_name="Сообщения"  logo={person}>0</StatisticItem>


        </div>

    )

}