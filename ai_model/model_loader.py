from sentence_transformers import SentenceTransformer

def load_model(model_name="all-MiniLM-L6-v2"):
    """
    Loads the Sentence-BERT model for text similarity comparisons.
    - Default model: `all-MiniLM-L6-v2` (lightweight & fast)
    """
    return SentenceTransformer(model_name)
