type AuditEntity = {
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
};

type Module = AuditEntity & {
  id: number;
  courseId: number;
  name: string;
};

type Course = AuditEntity & {
  id: number;
  name: string;
  modules: Module[];
};
