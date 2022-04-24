import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, memo, useCallback, useState } from "react";

// @ts-ignore
import { ReactComponent as ImageLogo } from "../static/image.svg";
import { Image } from "../types/image";
import { laravelApiEndPoint } from "../api/laravelApiEndPoint";

export const UploadForm = memo(() => {
  const [postData, setPostData] = useState<Image>();

  const onFileUploadToLaravel = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files !== null) {
        if (e.target.files!.length !== 0) {
          setPostData({
            name: e.target.files![0].name,
            content: "a",
            type: "a",
            size: 5,
          });
        }
      }
    },
    []
  );

  const onClickUpload = useCallback(() => {
    console.log(postData);
    // axios
    //   .post(`${laravelApiEndPoint}/api/images`, postData)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }, [postData]);

  return (
    <>
      <Flex h="100vh">
        <Box
          h={{ base: "680px", md: "540px" }}
          w={{ base: "400px", md: "480px" }}
          m="auto"
          bg="gray.50"
          borderRadius="10px"
          shadow="md"
        >
          <Stack direction="column" spacing={6} align="center">
            <Heading mt="40px">Image Uploader</Heading>
            <Text as="p" textAlign="center">
              jpegまたはpingの画像ファイルをアップロード
            </Text>
            <Box
              h={{ base: "120px", md: "180px" }}
              w={{ base: "240px", md: "360px" }}
              border="1px"
              borderColor="teal.100"
              borderRadius="10px"
              borderStyle="dashed"
              borderWidth="3px"
            >
              <Box mt={6}>
                <ImageLogo height="80px" opacity="0.5" />
              </Box>
              <Text as="p" textAlign="center" mt={6}>
                ここにドラッグ＆ドロップしてね
              </Text>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={onFileUploadToLaravel}
              />
            </Box>
            <Text as="p">または</Text>
            <Button>
              ファイルの選択
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={onFileUploadToLaravel}
              />
            </Button>
            <Button onClick={onClickUpload}>アップロード</Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
