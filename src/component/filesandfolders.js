import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './Navbar';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const UploadSection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const FileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FileItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileName = styled.span`
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  background-color: #ff5252;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles(fileList);
  };

  const handleFolderChange = (e) => {
    const folderList = Array.from(e.target.files);
    setFolders(folderList);
  };

  const handleDeleteFile = (index, type) => {
    if (type === 'file') {
      const updatedFiles = [...files];
      updatedFiles.splice(index, 1);
      setFiles(updatedFiles);
    } else if (type === 'folder') {
      const updatedFolders = [...folders];
      updatedFolders.splice(index, 1);
      setFolders(updatedFolders);
    }
  };

  const handleSubmit = async () => {
    // Create a new FormData object to hold the files
    const formData = new FormData();

    // Append each selected file to formData
    files.forEach((file) => {
      formData.append('files', file);
    });

    // Append each selected folder to formData
    folders.forEach((folder) => {
      Array.from(folder.files).forEach((file) => {
        formData.append('folders', file);
      });
    });

    // Send POST request to the backend
    try {
      const response = await axios.post('http://127.0.0.1:5000/predictxray', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
      // Handle success response here
    } catch (error) {
      console.error('Error uploading files:', error);
      // Handle error here
    }
  };

  return (
    <>
    <Navbar/>
      <Container>
        <SectionContainer>
          <UploadSection>
            <Title>Upload Files</Title>
            <input type="file" multiple onChange={handleFileChange} />
            {files.length > 0 && (
              <div>
                <h3>Selected Files:</h3>
                <FileList>
                  {files.map((file, index) => (
                    <FileItem key={index}>
                      <FileName>{file.name}</FileName>
                      <DeleteButton onClick={() => handleDeleteFile(index, 'file')}>Delete</DeleteButton>
                    </FileItem>
                  ))}
                </FileList>
              </div>
            )}
          </UploadSection>
        </SectionContainer>

        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Container>
    </>
  );
};

export default FileUpload;
