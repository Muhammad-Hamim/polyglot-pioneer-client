const PayRow = ({ history, index }) => {
  const { email, price, transactionId, date, quantity, classTitle } = history;
  return (
    <tr className="bg-white border-b hover:bg-gray-50 text-center">
      <td className="w-4 p-4">
        <h2 className="text-lg">{index + 1}</h2>
      </td>
      <td className="px-6 py-4">{email}</td>
      <th scope="row" className=" px-6 py-4 text-gray-900">
        <h2>TrxID: {transactionId}</h2>
        <h2>Date: {date}</h2>
      </th>
      <td className="px-6 py-4 font-bold">{quantity}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">
        {classTitle.map((title) => {
          return <h2 key={title}>{title}</h2>;
        })}
      </td>
    </tr>
  );
};

export default PayRow;
