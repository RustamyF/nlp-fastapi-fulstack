from transformers import AutoModelForQuestionAnswering, AutoTokenizer


def get_model(model):
    """Loads model from Hugginface model hub into
    the ./model directory"""
    try:
        model = AutoModelForQuestionAnswering.from_pretrained(model, use_cdn=True)
        model.save_pretrained("./model")
    except Exception as e:
        raise (e)


def get_tokenizer(tokenizer):
    """Loads tokenizer from Hugginface model hubinto
    the ./model directory"""
    try:
        tokenizer = AutoTokenizer.from_pretrained(tokenizer)
        tokenizer.save_pretrained("./model")
    except Exception as e:
        raise (e)


if __name__ == "__main__":
    get_model("mrm8488/mobilebert-uncased-finetuned-squadv2")
    get_tokenizer("mrm8488/mobilebert-uncased-finetuned-squadv2")
