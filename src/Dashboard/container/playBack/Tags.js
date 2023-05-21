import { Space, Tag } from 'antd';
import { useState } from 'react';
const { CheckableTag } = Tag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
const AwesomTags = () => {
  const [selectedTags, setSelectedTags] = useState('');
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? tag
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <>
      <span
        style={{
          marginRight: 8,
        }}
      >
        Categories:
      </span>
      <Space size={[0, 8]} wrap>
        {tagsData.map((tag,i) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
    </>
  );
};
export default AwesomTags;