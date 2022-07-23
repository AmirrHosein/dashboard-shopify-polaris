import React, { useCallback, useState } from "react";
import { Combobox, Listbox, Stack, Tag, TextContainer } from "@shopify/polaris";
import { useFormikContext } from "formik";
import { titleCase } from "../../utils/titleCase";
import { useSkillsQuery } from "../../generated/graphql";

interface Props {
  name: string;
}
interface Skill {
  id?: number | null;
  title?: string | null;
}

interface FormikValues {
  [field: string]: string[];
}

export const TextFieldSkills: React.FC<Props> = (props) => {
  const {
    values: { skills },
    setFieldValue,
  } = useFormikContext<FormikValues>();
  const { name } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const { data } = useSkillsQuery({
    variables: {
      title: inputValue,
      limit: 3,
    },
  });

  const updateTextSkill = useCallback(
    (value: string) => setInputValue(value),
    [setInputValue]
  );

  const updateSelection = useCallback(
    (selected: string) => {
      if (skills.includes(selected)) {
        setInputValue("");
        return;
      }

      setInputValue("");
      setFieldValue(name, [...skills, selected]);
    },
    [setFieldValue, setInputValue, name, skills]
  );

  const removeTag = useCallback(
    (tag: String) => () => {
      const result = skills.filter((skill: String) => skill !== tag);
      setFieldValue(name, result);
    },
    [setFieldValue, skills, name]
  );

  const tagsMarkup = skills.map((skill: String) => {
    let tagSkill = "";
    tagSkill = skill.replace("_", " ");
    tagSkill = titleCase(tagSkill);
    return (
      <Tag key={`${skill}`} onRemove={removeTag(skill)}>
        {tagSkill}
      </Tag>
    );
  });

  const optionsMarkup = data?.skills?.skills?.map(
    (skill: Skill | undefined | null) => {
      const { title, id } = skill as Skill;

      let value = "";
      value = (title as string).replace("_", " ");
      value = titleCase(value);

      return (
        <Listbox.Option
          key={`${id}`}
          value={value}
          selected={skills.includes(value)}
          accessibilityLabel={value}
        >
          {value}
        </Listbox.Option>
      );
    }
  );

  return (
    <>
      <Combobox
        activator={
          <Combobox.TextField
            onChange={updateTextSkill}
            label="Skills"
            value={inputValue}
            autoComplete="off"
          />
        }
      >
        <Listbox onSelect={updateSelection}>
          {inputValue !== "" ? (
            <Listbox.Action value={inputValue}>{inputValue}</Listbox.Action>
          ) : null}
          {optionsMarkup}
        </Listbox>
      </Combobox>
      <br />
      <TextContainer>
        <Stack>{tagsMarkup}</Stack>
      </TextContainer>
      <br />
    </>
  );
};
