import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Popconfirm, Modal, Checkbox, Flex } from "antd";
import type { TableRowSelection } from "antd/lib/table/interface";
import EditPersonForm from "./EditPersonForm";
import ViewPersonForm from "./ViewPersonForm";
import {
  deletePerson,
  setSelectedRowKeys,
  setEditingPerson,
  setViewingPerson,
} from "../features/personSlice";
import { RootState } from "../app/store";
import moment from "moment";
import { Person } from "../interfaces/person.interface";

const PersonTable: React.FC = () => {
  const dispatch = useDispatch();
  const { persons, selectedRowKeys, editingPerson, viewingPerson } =
    useSelector((state: RootState) => state.person);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDelete = (id: string) => {
    dispatch(deletePerson(id));
  };

  const handleDeleteSelected = () => {
    selectedRowKeys.forEach((key) => {
      dispatch(deletePerson(key.toString()));
    });
    setSelectedRowKeys([]);
  };

  const rowSelection: TableRowSelection<Person> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Person) =>
        `${record.name} ${record.surname}`,
      sorter: (a: Person, b: Person) => a.name.localeCompare(b.name),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: (a: Person, b: Person) => a.gender.localeCompare(b.gender),
    },
    {
      title: "หมายเลขโทรศัพท์มือถือ",
      dataIndex: "mobileNum",
      key: "mobileNum",
      render: (text: string, record: Person) =>
        `${record.mobileCode} ${record.mobileNum}`,
      sorter: (a: Person, b: Person) => a.mobileNum.localeCompare(b.mobileNum),
    },
    {
      title: "สัญชาติ",
      dataIndex: "national",
      key: "national",
      sorter: (a: Person, b: Person) => a.national.localeCompare(b.national),
    },
    {
      title: "จัดการ",
      key: "actions",
      render: (_: any, record: Person) => (
        <>
          <Button
            onClick={() => dispatch(setViewingPerson(record))}
            style={{ marginRight: 8 }}
          >
            View
          </Button>
          <Button
            onClick={() => dispatch(setEditingPerson(record))}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this person?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const paginationConfig = {
    showSizeChanger: true,
    pageSizeOptions: ["5", "10", "15"],
    defaultPageSize: 5,
  };

  return (
    <>
      <Flex gap={16} vertical>
        <div>
          <Checkbox
            onChange={(e) => {
              dispatch(
                setSelectedRowKeys(
                  e.target.checked ? persons.map((person) => person.id) : []
                )
              );
            }}
          >
            เลือกทั้งหมด
          </Checkbox>
          <Button
            onClick={handleDeleteSelected}
            disabled={selectedRowKeys.length === 0}
            style={{ marginLeft: 8 }}
          >
            ลบข้อมูล
          </Button>
        </div>
        <Table
          rowSelection={{
            selectedRowKeys,
            onChange: (keys) => dispatch(setSelectedRowKeys(keys)),
          }}
          columns={columns}
          dataSource={persons}
          rowKey="id"
          pagination={paginationConfig}
        />
      </Flex>
      <Modal
        title="Edit Person"
        visible={!!editingPerson}
        onCancel={() => dispatch(setEditingPerson(null))}
        footer={null}
        width="50%"
      >
        {editingPerson && (
          <EditPersonForm
            person={editingPerson}
            onCancel={() => dispatch(setEditingPerson(null))}
          />
        )}
      </Modal>
      <Modal
        title="View Person Details"
        visible={!!viewingPerson}
        onCancel={() => dispatch(setViewingPerson(null))}
        footer={null}
        width="50%"
      >
        <div>{viewingPerson && <ViewPersonForm person={viewingPerson} />}</div>
      </Modal>
    </>
  );
};

export default PersonTable;
