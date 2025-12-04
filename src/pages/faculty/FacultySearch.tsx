import StudentSearch from '@/pages/student/StudentSearch';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';

const FacultySearch = () => {
  return <StudentSearch />;
};

// Re-export with faculty role
export default function FacultySearchPage() {
  return (
    <DashboardLayout allowedRoles={['faculty']}>
      <StudentSearch />
    </DashboardLayout>
  );
}
