import { useEffect, useState, memo } from 'react';
import { StockExchange } from '../../utilities/models/stock-excange';
import { 
  CHATBOT_ERROR_MESSAGE,
  CHAT_REPLY,
  CHAT_REPLY_DELAY,
  CHAT_STEPS,
  MESSAGE_BY,
} from '../../utilities/constants';
import ErrorMessage from './error-message';
import { messagesSelector, previewExchangeSelector, stepSelector } from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, setPreviewExcange, setStep } from '../../store/slice';
import UserReply from '../userreply';
import { PICKED_VALUE } from '../../utilities/type';
import ChatReply from '../chatreply';

const ChatContent = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [stockExchanges, setStockExchanges] = useState<StockExchange[]>([]);
  const chatMessages = useSelector(messagesSelector);
  const step = useSelector(stepSelector);
  const previewExcange = useSelector(previewExchangeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await import('../../database/stock_data.json');
        if (!response || !response.default) {
          setError(CHATBOT_ERROR_MESSAGE);
          return;
        }
        setTimeout(() => {
          dispatch(addMessage({
            message: CHAT_REPLY.STOCK_EXCHANGE,
            messageBy: MESSAGE_BY.BOT,
            isDisabled: false,
            options: response.default.map((stock: StockExchange) => ({
              name: stock.stockExchange,
              code: stock.code,
          }))
          }));
        }
        , CHAT_REPLY_DELAY);

        setStockExchanges(response.default);
      } catch (error) {
        setError(CHATBOT_ERROR_MESSAGE);
        console.error(error);
      }
    }
    )();
  } , []);

  const handleStockExchangeSelected = (stock: PICKED_VALUE) => {
    const selectedStock = stockExchanges.find((item) => item.code === stock.code);
    dispatch(setPreviewExcange(stock.code));
    if (selectedStock) {
      dispatch(addMessage({
        message: stock.name,
        messageBy: MESSAGE_BY.USER,
        isDisabled: true,
      }));
      setTimeout(() => {
        dispatch(addMessage({
          message: CHAT_REPLY.STOCKS,
          messageBy: MESSAGE_BY.BOT,
          isDisabled: false,
          options: selectedStock.topStocks.map((stock) => ({
            name: stock.stockName,
            code: stock.code,
            price: stock.price,
          }))
        }));
      }, CHAT_REPLY_DELAY);
    }
    dispatch(setStep(CHAT_STEPS.STOCKS));
  }

  const handleStockSelected = (stock: any) => {
    dispatch(addMessage({
      message: stock.name,
      messageBy: MESSAGE_BY.USER,
      isDisabled: true,
    }));
    setTimeout(() => {
      dispatch(addMessage({
        message: `Stock Price of ${stock.name} is ${stock.price}. Please select an option.`,
        messageBy: MESSAGE_BY.BOT,
        isDisabled: false,
        options: [
          {
            name: 'Main Menu',
            code: 'main-menu',
          },
          {
            name: 'Go Back',
            code: 'go-back'
          }
        ]
      }));
    }, CHAT_REPLY_DELAY);
    dispatch(setStep(CHAT_STEPS.STOCK_DETAILS));
  }

  const handleStockDetails = (option: PICKED_VALUE) => {
    if (option.code === 'main-menu') {
      dispatch(addMessage({
        message: option.name,
        messageBy: MESSAGE_BY.USER,
        isDisabled: true,
      }));
      setTimeout(() => {
        dispatch(addMessage({
          message: CHAT_REPLY.STOCK_EXCHANGE,
          messageBy: MESSAGE_BY.BOT,
          isDisabled: false,
          options: stockExchanges.map((stock) => ({
            name: stock.stockExchange,
            code: stock.code,
          }))
        }));
      }, CHAT_REPLY_DELAY);
      dispatch(setStep(CHAT_STEPS.STOCK_EXCHANGE));
      return;
    } else if (option.code === 'go-back') {
      handleStockExchangeSelected({
        name: option.name,
        code: previewExcange,
      });
      return;
    }

    dispatch(setStep(CHAT_STEPS.STOCK_EXCHANGE));
  }

  const handleClick = (stock: PICKED_VALUE) => {
    switch (step) {
      case 0:
      case CHAT_STEPS.STOCK_EXCHANGE:
        handleStockExchangeSelected(stock);
        break;
      case CHAT_STEPS.STOCKS:
        handleStockSelected(stock);
        dispatch(setStep(CHAT_STEPS.STOCK_DETAILS));
        break;
      case CHAT_STEPS.STOCK_DETAILS:
        handleStockDetails(stock);
        break;
      default:
        break;
    }
  };

  return (
      <div className="d-flex flex-column gap-2 mx-3 overflow-auto"
        style={{
          margin: '100px 0',
        }}
      >
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <div className="d-flex flex-column gap-3">
            {chatMessages.map((item, index) => (
              <>
                {item.messageBy === MESSAGE_BY.BOT ? (
                  <ChatReply
                    item={item}
                    index={index}
                    handleClick={handleClick}
                  />
                ) : (
                  <UserReply
                    message={item.message}
                    index={index}
                  />
                )}
              </>
            ))}
          </div>
        )}
      </div>
  );
}

export default memo(ChatContent);
