function NavigationBar({ onTabSelect }) {
  return (
    <div className="px-3 mt-4">
      <ul className="flex gap-2 justify-center">
        <li className="px-6 py-2 bg-slate-200 rounded-3xl border-b-0 hover:bg-slate-300 hover:shadow-md">
          <button onClick={() => onTabSelect(0)}>Tab1</button>
        </li>
        <li className="px-6 py-2 bg-slate-200 rounded-3xl border-b-0 hover:bg-slate-300 hover:shadow-md">
          <button onClick={() => onTabSelect(1)}>Tab2</button>
        </li>
        <li className="px-6 py-2 bg-slate-200 rounded-3xl border-b-0 hover:bg-slate-300 hover:shadow-md">
          <button onClick={() => onTabSelect(2)}>Tab3</button>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
