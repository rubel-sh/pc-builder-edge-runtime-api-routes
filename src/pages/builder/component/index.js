import BuilderComponentListItem from "@/components/CustomUI/BuilderComponentListItem";
import Container from "@/components/CustomUI/Container";

const SelectBuilderComponent = ({ choosenCategoryData }) => {
    if (!choosenCategoryData.success) return null;

    return (
        <Container>
            <div className="space-y-4">
                {choosenCategoryData.data.map((item, index) => (
                    <BuilderComponentListItem key={item._id} productInfo={item} />
                ))}
            </div>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const choosenCategory = context.query.item;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/item_lists_limited_data?component=${choosenCategory}`
    );
    const data = await res.json();

    return {
        props: {
            choosenCategoryData: data,
        },
    };
}

export default SelectBuilderComponent;
