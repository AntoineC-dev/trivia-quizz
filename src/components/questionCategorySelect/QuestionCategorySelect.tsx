import { Select, Text, VStack } from "@chakra-ui/react";
import { API_CATEGORIES } from "../../api";
import { useCategory, useSetConfig } from "../../controllers";

export const QuestionCategorySelect = () => {
  const category = useCategory();
  const setConfig = useSetConfig();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setConfig({ category: Number(e.target.value) });
  return (
    <VStack w="100%" spacing={4}>
      <Text as="h3" fontSize="lg">
        Choose a category:
      </Text>
      <Select placeholder="Choose category..." defaultValue={category} onChange={handleSelectChange}>
        {API_CATEGORIES.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </VStack>
  );
};
