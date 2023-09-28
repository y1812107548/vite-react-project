import Box from './Box';

export default function Observer() {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
    </>
  )
}

function LongSection(){
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling) </li>)
  }
  return <ul>{items}</ul>
}
